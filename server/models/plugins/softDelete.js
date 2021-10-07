const softDelete = (schema) => {
  // Append fields to every schema if not added yet
  schema.add({
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: undefined,
    },
  });

  // Implementation of basic soft delete
  schema.static('softDelete', async function (arg) {
    if (Object.keys(arg).length !== 1 || !arg._id) {
      throw Error('Could not delete, _id field is mandatory');
    }

    return this.findOneAndUpdate(arg, {
      $set: {
        deleted: true,
        deletedAt: new Date(),
      },

    }).exec();
  });

  // Implementation of basic recover soft deleted record
  schema.static('recover', async function (arg) {
    if (Object.keys(arg).length !== 1 || !arg._id) {
      throw Error('Could not recover, _id field is mandatory');
    }

    await this.findOneAndUpdate(arg, {
      $set: {
        deleted: false,
      },
      $unset: {
        deletedAt: 1,
      },
    }).exec();
  });

  // Hide every deleted record only on find calls
  schema.pre('find', function () {
    // If find queries deleted records, return only deleted
    if (this._conditions.deleted !== true) {
      this._conditions.deleted = {
        $ne: true,
      };
    }
  });

  schema.pre('aggregate', function () {
    // Add a $match state to the beginning of each pipeline.
    this.pipeline().unshift({
      $match: {
        deleted: {
          $ne: true,
        },
      },
    });
  });
};

module.exports = softDelete;
