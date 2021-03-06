// -- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2015 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
// ++

import {
  SimpleResource,
  SimpleResourceCollection
} from 'core-app/modules/common/path-helper/apiv3/path-resources';
import {Apiv3QueryPaths} from 'core-app/modules/common/path-helper/apiv3/queries/apiv3-query-paths';

export class Apiv3QueriesPaths extends SimpleResourceCollection<Apiv3QueryPaths> {
  constructor(basePath:string) {
    super(basePath, 'queries');
  }

  // Static paths
  readonly form = new SimpleResource(this.path, 'form');

  readonly default = new SimpleResource(this.path, 'default');

  // /api/v3/users/:userId
  public id(userId:string|number):Apiv3QueryPaths {
    return new Apiv3QueryPaths(this.path, userId);
  }
}
