import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

import {
  text,
  integer,
  password,
  timestamp,
} from '@keystone-6/core/fields'


import type { Lists } from '.keystone/types'

export const lists: Lists = {
  User: list({
    access: allowAll,

    fields: {
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),

      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),

  BetaRequest: list({
    access: allowAll,
    
    fields: {
      queueOrder: integer({ isIndexed: 'unique' }),
      
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),


      source: text({ defaultValue: "Website" }),

      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    }
  }),
};
