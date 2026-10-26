const projectStatus = {
    PENDING: { description: 'Pending Execution' },
    SUCCESS: { description: 'Executed Successfully' },
    FAILURE: { description: 'Execution Failed' },
}

class ProjectIdea {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }
    updateProjectStatus(newStatus) {
        this.status = newStatus;
    }
}

class ProjectIdeaBoard {
    constructor(title) {
        this.ideas = [];
        this.title = title;
    }
    pin(obj) {
        this.ideas.push(obj);
    }
    unpin(obj) {
        let index = this.ideas.indexOf(obj);
        if (index != -1) {
            this.ideas.splice(index, 1);
        }
    }
    count() {
        return this.ideas.length;
    }
    formatToString() {
        let res = `${this.title} has ${this.count()} idea(s)\n`;
        this.ideas.forEach((obj) => {
            res += `${obj.title} (${obj.status.description}) - ${obj.description}\n`;
        })
        return res;
    }
}
let techProjects=new ProjectIdeaBoard("Tech Projects Board")
let ideadObj=new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")

techProjects.pin(ideadObj);
console.log(techProjects.formatToString())

"Tech Projects Board has 1 idea(s)\nSmart Home System (Pending Execution) - An integrated system to control lighting, temperature, and security devices remotely.\n"