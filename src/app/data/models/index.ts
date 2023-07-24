import User from './user.model';
import Idea from './idea.model';
import Comment from './comment.model';

// associations
User.hasMany(Idea, { foreignKey: 'user_id' });
Idea.belongsTo(User);

Idea.hasMany(Comment, { foreignKey: 'idea_id' });
Comment.belongsTo(Idea);

export { User, Idea, Comment };
