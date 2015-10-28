var Profile = Backbone.Model.extend({
        defaults : {
          name    : null,
          gender  : null,
          job : null
        }
      });
  
      var profile = new Profile({
        name    : "Srirama Murthy",
        gender  : "male",
        job : "Corporate Trainer"
      });
  
      var CardComponent = React.createClass({
        render : function() {
          return (		
            <div className="card">
                <h1>Backbone with React </h1><br/>
              <div className="name">
                {this.props.profile.get("name")}
                <small>
                 -  {this.props.profile.get("gender")}
                </small>
				        <small>
                    ({this.props.profile.get("job")})
                </small>
              </div>
            </div>
          );
        }
      });
  
      React.render(
        <CardComponent profile={profile} />,
        document.body
      );
  