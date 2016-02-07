export const users = {
  single: username => `/users/${ username }`,
  me: '/user',
  listAll: '/users',
  listContributors: (owner, repo) => `/repos/${ owner }/${ repo }/contributors`
};

export const repos = {
  me: '/user/repos',
  listByOrg: org => `/orgs/${ org }/repos`,
  listByUser: username => `/users/${ username }/repos`,
  listAll: '/repositories',
  get: (owner, repo) => `/repos/${ owner }/${ repo }`
};

export const languages = {
  listByRepo: (owner, repo) => `/repos/${ owner }/${ repo }/languages`
};

export const teams = {
  listByRepo: (owner, repo) => `/repos/${ owner }/${ repo }/teams`
};

export const tags = {
  listByRepo: (owner, repo) => `/repos/${ owner }/${ repo }/tags`
};

export const branches = {
  listByRepo: (owner, repo) => `/repos/${ owner }/${ repo }/branches`,
  get: (owner, repo, branch) => `/repos/${ owner }/${ repo }/branches/${ branch }`
};
