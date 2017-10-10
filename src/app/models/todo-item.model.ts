export class TodoItem {
	task: string;
	order;
	done: boolean = false;

	constructor(task: string, order, done?: boolean){
		this.task = task;
		this.order = order;
		this.done = done;
	}
}