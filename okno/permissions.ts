import type { PermissionsConfig } from "okno"

export default {
	roles: {
		developer: {
			pages: { read: true, write: true, delete: true, publish: true },
			collections: { read: true, write: true, delete: true, publish: true },
			globals: { read: true, write: true, delete: true, publish: true },
			users: { read: true, write: true, delete: true, publish: false },
			permissions: { read: true, write: false, delete: false, publish: false },
		},
		editor: {
			pages: { read: true, write: true, delete: false, publish: true },
			collections: { read: true, write: true, delete: false, publish: true },
			globals: { read: true, write: true, delete: false, publish: true },
			users: { read: true, write: false, delete: false, publish: false },
			permissions: { read: false, write: false, delete: false, publish: false },
		},
	},
} satisfies PermissionsConfig
