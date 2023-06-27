function getVoteCount(obj) {
    
    let votes = obj.upvotes - obj.downvotes
    return votes
}

console.log('Result Case 1: ' + getVoteCount({upvotes:13, downvotes:0}))
console.log('Result Case 1: ' +getVoteCount({upvotes:2, downvotes:33}))
console.log('Result Case 1: ' +getVoteCount({upvotes:132, downvotes:132}))


    