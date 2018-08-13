# Group Agreement



## Communication:
* Outside communication will be managed via slack in the teamaquamarine channel
* Issues/task assignment/and to-dos on github
* File storage and version control via github

#### Brainstorming/Meetings
* 15-30 minutes, allowing for exceptions
* Make sure everyone is on-board/understanding of the situation BEFORE moving forward with a decision.
* No screens or distractions during meetings

### Psychological Safety
There is no personal possession of an idea once voiced. Success and failures are the burden of the group, not an individual.

## Conflict Plan
* Create safe place to be able to express feelers
* If a conflict arises:
* First step is to get together as a group (if a group challenge) and talk about any conflict that comes up.
* Don’t talk about others not present.
* Go directly to the person you have a conflict with, or instructor if mediation is needed.
### Scenarios
* Feelings of not equal distribution
* Feelings that it’s getting too off task
* Someone totally breaks the internet
* Struggling with the work process
* Someone is becoming micromanag-ie
* Someone does not agree with others

## Work Plan
### Flow
* Standup/merge party first thing in the morning
* Let group know if you’re going to work on something before doing so.
* Moving to science lab every day
* Break as you need, but 10 minute breaks an hour encouraged
* Check-in option after lunch (standup #2)
* Lunch at 11:30ish
* Ask for help from a neighbor/partner after being stuck for 15 minutes. If both can’t solve within 30-45min, seek help from instructors

Git & GitHub Team Workflow
=================

## When you start a new feature...
* Start from an up-to-date _development_ branch   
 * `git checkout master`  
 * `git pull origin master`
 *  Create a new feature branch with `git checkout -b <branchname>`  
* Do work on your feature branch and **add**, **commit**, and **push**   
 * `git add <file>`  
 * `git commit -m <useful message>`  referencing/closing issue # ie.("Closes #13 ...")
 * `git push origin <feature_branch_name>`
* On GitHub...
 * Create a Pull Request (PR) for that branch on GitHub
 * Have at LEAST one other person review the code in the PR and merge it


## Time for a Merge Party!

**WHEN A PULL REQUEST FROM SOMEONE ELSE'S \<FEATURE BRANCH> IS MERGED TO DEVELOPMENT, EVERYONE MUST DO THESE STEPS**  

 * commit changes to your _feature branch_
   * `git add <file>`  
   * `git commit -m <useful message>`   
 * update your local _development_ branch  
   * `git checkout development`   
   * `git pull origin development`  
 * update your _feature branch_ with changes in _development_  
 	 * `git checkout <feature_branch_name>`  
   * `git merge development`   
 * handle merge conflicts _if there are any_  
  	* Check all of your project files for the markers that indicate merge conflicts (in other words, the `>>>>>>>>>` and `HEAD` stuff that has mysteriously appeared in your code)
  	* Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers
  	* `git add <affected-files>`
  	* `git commit -m "merged development"` 



Additional Thoughts