// Name: Anthony Tracy
// Email: Anthony.Tracy@colorado.edu
// Description: Writing different structs and functions for practice

// Testing that I can get things to run in node.js 
function helloWorld() {
  console.log("Hello World! This is a test.");
}

// Testing java:
helloWorld();

// ---------------------------------------------- //

/* Structs Practice Begins */

// A Building block to abstracted to many datatypes...
class node{
  // Mkae a initilizer method
  constructor(data,left=null,right=null){
    this.data = data
    this.left = left
    this.right = right
  }
}

// Building Linked List - singly linked
class singlyLinked{
  // for abstraction of node, lets say these start left to right
  constructor(data,next=null){
    this.data = data
    this.next = next

  // Getters - will need these, haven't written them yet
  set add(data){
    this.next = node(data,left=null,right=null)
  }
  set remove(data){
    // If the data in current node is what I need to remove
    if data = this.data
      
    
  }

}

