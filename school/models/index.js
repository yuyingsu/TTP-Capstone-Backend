const Sequelize = require('sequelize');
const db = new Sequelize('school', 'postgres', 'osaka1994', {
  host: 'localhost',
  dialect: 'postgres'
});
const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image_url: {
    type: Sequelize.STRING,
    default: "https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Student = db.define('student', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isValidEmail(email) {
        let error=false;
        if (email.length <= 2) {
            error=true;
        }
        if (email.indexOf("@") == -1) {
           error=true;
        }
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;
    
        if (dot == -1 || dot < 2 || dotCount > 2) {
           error=true;
        }

        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
              error=true;
            }
        }
 
        if(error){
          throw new Error('Invalid email format.');
        }
    }
    }
  },
  image_url: {
    type: Sequelize.STRING,
    default: "https://www.k3ma.com/wp-content/uploads/2017/04/default-image.jpg"
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      max: 4.0,
      min: 0.0
    }
  }
});

Student.belongsTo(Campus, {
  foreignKey: "campus_id"
});

Campus.sync().then(() => {
    console.log('table created');
  });

Student.sync().then(() => {
    console.log('table created');
  });

module.exports = {
    Campus,
    Student
  }