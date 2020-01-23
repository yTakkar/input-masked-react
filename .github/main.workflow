workflow "PR Lint" {
  on = "pull_request"
  resolves = ["Lint Check"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint Check" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run lint"
}
