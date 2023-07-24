import { DataTypes } from 'sequelize';

import { db } from '../../../config/db';
import { FileModel } from '../interfaces';

const File = db.define<FileModel>(
  'files',
  {
    filename: {
      type: DataTypes.STRING,
    },
    mimetype: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

File.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  values.create_at = values.createdAt;
  values.updated_at = values.updatedAt;

  delete values.userId;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

export default File;
