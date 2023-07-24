import User from './user.model';
import Idea from './idea.model';

// associations
User.hasMany(Idea, { foreignKey: 'user_id' });
Idea.belongsTo(User);

export { User, Idea };
