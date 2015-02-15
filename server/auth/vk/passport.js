var passport = require('passport');
var VKontakteStrategy = require('passport-vkontakte').Strategy;

exports.setup = function (User, config) {
  passport.use(new VKontakteStrategy({
      clientID: config.vk.clientID,
      clientSecret: config.vk.clientSecret,
      callbackURL: config.vk.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'vk.id': profile.id
      }, function(err, user) {
        if (!user) {
          user = new User({
            name: profile.displayName,
            role: 'user',
            username: profile.username,
            provider: 'vk',
            vk: profile._json
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          console.log('Return user ' + JSON.stringify(user))
          return done(err, user);
        }
      });
    }
  ));
};
