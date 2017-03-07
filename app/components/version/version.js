'use strict';

angular.module('userApp.version', [
  'userApp.version.interpolate-filter',
  'userApp.version.version-directive'
])

.value('version', '0.1');
