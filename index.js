module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!')
    robot.on(['pull_request.opened', 'pull_request.reopened'],  async context => {
    const {owner, repo} = context.repo()
    const content = context.payload.pull_request.body
    const pr_no = context.payload.pull_request.number
    const pr_title = context.payload.pull_request.title
    const sender = context.payload.sender.login
    const sha = context.payload.pull_request.head.sha

    console.log(owner);
    console.log(sender);
    console.log(repo);
    console.log(content);
    console.log(pr_no);
    console.log(sha);
    console.log(pr_title);
    //
    //
    return context.github.pullRequests.merge({
      number: pr_no,
      owner: owner,
      repo: repo,
      commit_title: pr_title,
      commit_message: content,
      merge_method: "merge",
      sha: sha
    });

  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
