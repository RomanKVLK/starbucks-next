export interface IMenuLink {
	map(arg0: (item: IMenuLink) => JSX.Element): import('react').ReactNode
	name: string
	link: string
}
