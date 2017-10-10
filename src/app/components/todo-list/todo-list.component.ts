import { Component } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

	tasks: any[];
	newTask: TodoItem = new TodoItem('','');
	editTask: TodoItem;

	constructor(){
		this.tasks = [
			new TodoItem('First task',1),
			new TodoItem('Second task',2),
			new TodoItem('Third task',3),
		]
	}

	remove(task){
		const index = this.tasks.indexOf(task);
		this.tasks.splice(index,1);
	}

	edit(task){
		this.editTask = task;
	}

	applyEdit(){
		this.editTask = new TodoItem('','');
	}

	moveUp(task){
		const index = this.tasks.indexOf(task);
		if(index < 1) return;
		this.tasks[index].order--;
		this.tasks[index-1].order++;
		this.sortTasks();
	}

	moveDown(task){

		let index = this.tasks.indexOf(task);
		let order = task.order;
		if (order > this.tasks.length - 1) return;
		this.tasks[index].order++;
		this.tasks[index+1].order--;
		this.sortTasks();
	}

	sortTasks(){
		this.tasks = this.tasks.sort((a,b) => {
			let orderA = a.order;
			let orderB = b.order;

			if (orderA < orderB) {
			    return -1;
			  }
			  if (orderA > orderB) {
			    return 1;
			  }
			  // names must be equal
			  return 0;
		});
	}

	addNewTask(newTask) {
		const task = {
			task: newTask.task,
			order: this.accountOrder(newTask),
		};
		this.tasks.push(task);
		this.newTask =  new TodoItem('','');
	}

	accountOrder(newTask) {
		let orderNumber = this.tasks.length +1;
		let newOrderNumber;
		this.tasks.forEach(function(task) {

			if(task.order === orderNumber){
				newOrderNumber = orderNumber +3;
		}
			newOrderNumber = orderNumber;
		})
		return newOrderNumber;
	}
}