import Comment from './comment.model';
import File from './file.model';
import Idea from './idea.model';
import User from './user.model';

// associations
User.hasMany(Idea, { foreignKey: 'user_id' });
Idea.belongsTo(User);

Idea.hasMany(Comment, { foreignKey: 'idea_id' });
Comment.belongsTo(Idea);

export { Comment, File, Idea, User };
