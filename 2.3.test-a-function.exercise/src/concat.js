Array.prototype.concat = function() {

  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    if(Array.isArray(element)) {
      element.forEach(e => this.push(e))
    } else {
      this.push(element)
    }
  }
  return ;
}
