var User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

User.getCount(); //==> 1
// Bind the context of User to getCount

var getCount = User.getCount;
getCount() // ==> undefined

// Have getCount return the internal value of User
var getCount = User.getCount.bind(User);
getCount(); //==> 1