function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	var room = roomArray[roomIndex];
	document.getElementById("roomTitle").innerText = room.title;
	document.getElementById("roomText").innerText = room.text;
	document.getElementById("roomChoices").innerText = "";


	var choices = room.choices;
	for(var i = 0; i < choices.length; i++)
	{
		var choice = choices[i];
		var btn = document.createElement("button");
		btn.innerText = choice.text;
		btn.addEventListener("click", (function(index) {
			return function() {
				SelectRoom(index);
			}
		})
		(choice.index));

		document.getElementById("roomChoices").appendChild(btn);
	}
}
