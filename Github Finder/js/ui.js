class UI {
  constructor(){
      this.profile = document.getElementById('profile');
  }

  showProfile(user){


      this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
          <div class="col-md-3">
              <img src="${user.avatar_url}" class="img-fluid mb-2">
              <a href="${user.html_url}" target="black" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
              <span class="badge badge-primary my-2">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary my-2">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success my-2">Followers: ${user.followers}</span>
              <span class="badge badge-info my-2">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
          </div>
      </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>

  `;

  }

  clearProfile(){
      this.profile.innerHTML = '';
  }

  clearAlert(){
      const currentAlert = document.querySelector('.alert');

      if(currentAlert){
          currentAlert.remove()
      } else {

      }
  }

  showAlert(msg,className){
      this.clearAlert();
      const div = document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(msg));
      const container = document.querySelector('.searchContainer');
      const searchBox = document.querySelector('.search');
      container.insertBefore(div,searchBox);

      setTimeout(()=> {
         this.clearAlert() 
      },3000);
  }

  showRepos(repos){
      let output = '';

      repos.forEach((repo) => {
          output += `
              <div class="card card-body mb-2">
                  <div class="row">
                      <div class="col-md-6">
                          <a href="${repo.html_url}" target="blank">${repo.name}</a>
                      </div>
                      <div class="col-md-6">
                          <span class="badge badge-primary my-2">Stars: ${repo.stargazers_count}</span>
                          <span class="badge badge-secondary my-2">Watchers: ${repo.watchers_count}</span>
                          <span class="badge badge-success my-2">Forks: ${repo.forks_count}</span>
                      </div>
                  </div>
              </div>

          `;
      })

      document.getElementById('repos').innerHTML = output;
  }

}