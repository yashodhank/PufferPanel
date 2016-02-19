/*
 Copyright 2016 Joshua Taylor <lordralex@gmail.com>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var _ = require('underscore');

var LocationCollection = function () {
    this.db = [];
};

LocationCollection.prototype.get = function (uuid) {
    var self = this;
    var result = _.find(self.db, function (location) {
        return location.uuid == uuid;
    });
    return result;
};

LocationCollection.prototype.add = function (location) {
    var self = this;
    self.db.push(location);
};

LocationCollection.prototype.remove = function (uuid) {
    var self = this;
    self.db = _.reject(self.db, function (location) {
        return location.uuid == uuid;
    });
};

LocationCollection.prototype.update = function (uuid, newValues) {
    var self = this;
    _.each(self.db, function (location) {
        if (location.uuid == uuid) {
            _.extend(location, newValues);
        }
    });
    return self.get(uuid);
};

LocationCollection.prototype._reset = function (data) {
    var self = this;
    self.db = _.clone(data);
};

module.exports = LocationCollection;