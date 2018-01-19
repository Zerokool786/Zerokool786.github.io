var roomArray = [
	{
		title:'Asylum - Prologue',
		text:'A thunderstrike wakes you up from your sleep and you find yourself in a mental asylum. You hear disturbing noises outside your cell.',
		choices:[
			{
				text:'Look around the cell for objects of interest',
				index:1
			}
		]
	},
	{
		title:'Cell - Start',
		text:'There is a bulb, a bed, a toilet and a pot with a mug in your cell. In a wall, there is a small crack, big enough to whisper with the prisoner next to your cell who happens to be an ex-military veteran.',
		choices:[
			{
				text:'Examine the pot',
				index:2
			},
			{
				text:'Examine the mug',
				index:3
			},
			{
				text:'Search the tiolet',
				index:4
			},
			{
				text:'Examine the crack and talk with the veteran',
				index:5
			}
		]
	},
	{
		title:'Cell - Examine the Pot',
		text:'You find an earthen pot in your cell. You examine it and find it filled with water.',
		choices:[
			{
				text:'Back to cell',
				index:1
			}
		]
	},
	{
		title:'Cell - Examine the Mug',
		text:'You take the mug and collect water in it from the earthen pot. Drink from the mug and your health will be replenished.',
		choices:[
			{
				text:'Back to cell',
				index:1
			}
		]
	},
	{
		title:'Cell - Search Toilet',
		text:'You lift the lid on the flush and find a thin metal lever which can be transformed into a bobby pin.',
		choices:[
			{
				text:'Craft a bobby pin from the crafting menu in the pause screen',
				index:1
			}
		]
	},
	{
		title:'Cell - Examine the crack',
		text:'An irritated and frustrated voice can be heard through the crack. You whisper through the crack and ask the veteran’s help for giving you a heads up each time a guard comes through the corridor.',
		choices:[
			{
				text:'Escape ally acquired',
				index:6
			}
		]
	},
	{
		title:'Cell - Escape',
		text:'The guard outside your cell goes to the dining hall to get some coffee. You use the bobby pin to open the lock, the veteran hears the footsteps of the guard coming back through the corridor and gives you the heads up by whistling in your direction.',
		choices:[
			{
				text:'Enter Corridor',
				index:7
			}
		]
	},
	{
		title:'Corridor',
		text:'There are two doors leading out of the jail and a door to the north (veteran’s cell). A door to the north will lead to Cell 2 and you have a choice to save the other prisoner (Detection Risk High) or you go through the other two doors, a door to the east will lead to the storage room and a door to the south will get you to medical ward.',
		choices:[
			{
				text:'Go through the north door',
				index:8
			},
			{
				text:'Go through the east door',
				index:9
			},
			{
				text:'Go through the south door',
				index:10
			}
		]
	},
	{
		title:'Cell 2',
		text:'You open the lock of Cell 2 and free the veteran prisoner but you get caught by the guard because the guard was vigilant. (Coffee from the dining hall)',
		choices:[
			{
				text:'Back to cell Captured!',
				index:1
			}
		]
	},
	{
		title:'Storage Room',
		text:'You find yourself in the storage room full of food supplies and mulled-wine barrels and there is nothing useful that will aid you in your escape.',
		choices:[
			{
				text:'Back to the corridor',
				index:7
			}
		]
	},
	{
		title:'Medical Ward',
		text:'A medical ward is unlocked using the bobby pin. A room full of surgical equipment that can be weaponized to your advantage. You gain the ability to kill a guard.',
		choices:[
			{
				text:'Go through the corridor towards Cell 2 and kill the guard in the corridor. You free the veteran and continue your escape.',
				index:11
			}
		]
	},
	{
		title:'Dining hall',
		text:'You are in the dining hall. The veteran consumes some supplies and replenishes his health.',
		choices:[
			{
				text:'Go through the Medical Ward',
				index:12
			}
		]
	},
	{
		title:'Guards Room',
		text:'A room filled with sleeping guards. The veteran makes a slight noise and wakes all the guards and you two fight the guards. The veteran aids you to kill all the guards but unfortunately sustains life-threatening injuries in the process. Now you have to choose if you wanna go through the main gate or through the sewage tunnels.',
		choices:[
			{
				text:'Go through the Main Gate',
				index:13
			},
			{
				text:'Go through the Generator Room',
				index:14
			}
		]
	},
	{
		title:'Main gate',
		text:'The guards have spotted you and thrown you back in the cell!',
		choices:[
			{
				text:'Back to cell Captured!',
				index:1
			}
		]
	},
	{
		title:'Generator Room',
		text:'You find a small passage underneath the floor of the generator room leading to the sea. You swim your way towards the city that is in a far distance. Eventually, you reach the shore of harbour by showing courage and determination. You start a new chapter in your life. Freedom!',
		choices:[
			{
				text:'Freedom!',
				index:1
			}
		]
	}
]



