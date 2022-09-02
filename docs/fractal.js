const nBranches = 4
const position = [0, 0, 0]
function Tree(depth = 6, size = 100) {
  this.depth = depth;
  this.size = size;
  this.growth = 0;
  this.hasBranches = this.depth > 1;
  this.branches = null;

  const geometry = new THREE.BoxGeometry(size / 8, size, size / 8);

  // Change the geometrys center position to be the base of the geometry
  geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, size / 2, 0));

  const material = new THREE.MeshStandardMaterial({ wireframe: false, color: '#42380E' });
  
  THREE.Mesh.call(this, geometry, material);
  
  this.position.set(position[0], position[1], position[2])
}

Tree.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {

  constructor: Tree,

  addBranches() {
    const top = new THREE.Vector3(0, this.size, 0);
    const branchSize = this.size * 0.7;
    const branchDepth = this.depth - 1;

    this.branches = [];
    const ang = (360/nBranches) * (Math.PI / 180)
    
    for(let i = 0; i < nBranches; i++){
      const branch = new Tree(branchDepth, branchSize);
      branch.position.set(top.x, top.y, top.z);
      branch.rotateZ(Math.PI * (1 / 4));
      branch.rotation.y = (ang) * i;
      this.add(branch);
      this.branches.push(branch);
    }
  },

  update() {
    if (this.growth < 1) {
      this.growth += 0.005;
      this.scale.y = this.growth;
    } else if (this.hasBranches) {
      if (!this.branches) {
        this.addBranches();
      }
      this.branches.forEach((branch) => {
        branch.update();
      });
    }
  },

});