class Github {
    constructor(){
        this.client_id='568cf9d2e68434811369';
        this.client_secret='f842ac95e5af97aa49c9d3eaba9cb785f929b47b';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }

async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

const profile=await profileResponse.json();
const repos=await repoResponse.json();

return {
    profile,
    repos
     }
   }
}