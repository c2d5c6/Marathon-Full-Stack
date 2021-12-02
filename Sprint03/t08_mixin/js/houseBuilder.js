let houseBlueprint = {
    address: this.address,
    date: {
        toDateString: function() {
            return new Date()
        }
    },
    description: this.description,
    owner: this.owner,
    size: this.size,
    getDaysToBuild: function() {
        return this.size / this._averageBuildSpeed
    }
}

function HouseBuilder(address, description, owner, size, roomCount, _averageBuildSpeed){
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this.getDaysToBuild = this.getDaysToBuild
    this._averageBuildSpeed = 0.5
}

HouseBuilder.prototype = houseBlueprint