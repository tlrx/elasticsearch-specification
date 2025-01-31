/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Repository } from '@snapshot/_types/SnapshotRepository'
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Create or update a snapshot repository.
 * IMPORTANT: If you are migrating searchable snapshots, the repository name must be identical in the source and destination clusters.
 * To register a snapshot repository, the cluster's global metadata must be writeable.
 * Ensure there are no cluster blocks (for example, `cluster.blocks.read_only` and `clsuter.blocks.read_only_allow_delete` settings) that prevent write access.
 * @rest_spec_name snapshot.create_repository
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @ext_doc_id register-repository
 */
export interface Request extends RequestBase {
  path_parts: {
    /** @codegen_name name */
    repository: Name
  }
  query_parameters: {
    master_timeout?: Duration
    timeout?: Duration
    verify?: boolean
  }
  /** @codegen_name repository */
  body: Repository
}
