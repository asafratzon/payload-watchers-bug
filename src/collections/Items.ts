import type { CollectionConfig } from 'payload'

export const Items: CollectionConfig = {
  slug: 'items',
  fields: [
    {
      name: 'watchers',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true, // 👈 This is the bug trigger
    },
  ],
}
