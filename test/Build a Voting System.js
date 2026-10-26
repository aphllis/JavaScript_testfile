const poll=new Map();
function addOption(option){
  if (!option)return `Option cannot be empty.`;
  if (!poll.has(option)){
    poll.set(option,new Set())
    return `Option "${option}" added to the poll.`;
  }else{
    return `Option "${option}" already exists.`;
  }
}
function vote(option,voterId){
  if (!poll.has(option)){
    return `Option "${option}" does not exist.`;
  }
  if (poll.get(option).has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`;
  }else{
    poll.get(option).add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

addOption("Egypt");
addOption("Turkey");
addOption("EMorocco");
poll.set("Egypt",new Set([1,2]))
poll.set("Turkey",new Set([4]))
poll.set("EMorocco",new Set())
function displayResults(){
  let res='Poll Results:\n';
  poll.forEach((val,key)=>{
    res+=`${key}: ${val.size} votes\n`;
  })
  return res.trimEnd();
}