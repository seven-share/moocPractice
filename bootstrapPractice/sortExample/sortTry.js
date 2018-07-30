Sortable.create(foo, {
    group: {
        name:foo,
        put:['bar','qux']
    },
    animation: 100,
    ghostClass: 'ghost',
    chosenClass: "chosen",
    // delay:400,
    filter:'.no',
    onFilter: function (evt) {
		var item = evt.item;
        var	ctrl = evt.target;
        console.log(item)
        console.log('-----------------')
        console.log(ctrl)
        console.log('-----------------')
        console.log(evt)


    },
    store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
			var order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
            var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
        }
    }
  });
  
  Sortable.create(bar, {
    group: {
      name: 'bar',
      put: 'qux',
      pull: function (to, from) {
        return from.el.children.length > 2 || 'clone';
      }
    },
    animation: 100
  });
  
  Sortable.create(qux, {
    group: {
      name: 'qux',
      put: function (to) {
        return to.el.children.length < 4;
      }
    },
    animation: 100
  });



  Sortable.create(A, {
    animation: 200,
    group: {
      name: "shared",
      pull: "clone",
      revertClone: true,
    },
    sort: true
  });
  
  Sortable.create(B, {
    group: "shared",
    sort: false
  });