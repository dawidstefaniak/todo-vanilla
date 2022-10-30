const list = document.getElementById("todo-list");

const input = document.getElementById("todo-input");

const getNewCheckbox = (index) => {
	const newCheckbox = document.createElement("input");
	newCheckbox.setAttribute("type", "checkbox");
	newCheckbox.setAttribute("name", `todo-checkbox-${index}`);
	newCheckbox.addEventListener("change", (ev) => {
		const isChecked = ev.target.checked;
		const targetParent = ev.target.parentNode;
		targetParent.setAttribute("class", isChecked ? "done " : "" );
	});
	return newCheckbox;
};

input.addEventListener("keypress",((ev) => {
	if (ev.code === "Enter"){
		const value = ev.target.value;
		const listItem = document.createElement("li");
		const text = document.createTextNode(value);

		const index = list.childElementCount;
		listItem.appendChild(getNewCheckbox(index));

		listItem.appendChild(text);

		list.appendChild(listItem);
		input.value = "";
	}
}));