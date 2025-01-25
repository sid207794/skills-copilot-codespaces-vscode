function skillsMember() {
    this.skills = ['JavaScript', 'React', 'Node', 'Express'];
    this.addSkill = function (skill) {
        this.skills.push(skill);
    }
}