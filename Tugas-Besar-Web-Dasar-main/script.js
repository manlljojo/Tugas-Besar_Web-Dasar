fetch('detailmakanan.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cardContainer');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
      <div class="identity">
      <a href="${item.link}">
        <div class="menu-card h-100">
          <img src="img/${item.gambar}" class="menu-card-img-top" alt="${item.nama}">
          <div class="menu-card-body">
            <h5 class="menu-card-title">${item.nama}</h5>
            <p class="menu-card-text">${item.deskripsi}</p>
          </div>
        </div>
      </a>
      </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Gagal memuat data:', error));

  let tasks = [];
    function renderTasks() {
      $("#taskTable tbody").empty();
      tasks.forEach(task => {
        const row = $(`
          <tr style="display: none;">
            <td>${task}</td>
            <td><button class="delete-btn">Hapus</button></td>
          </tr>
        `);

        row.find(".delete-btn").on("click", function () {
          const taskText = $(this).closest("tr").find("td:first").text().trim();
          tasks = tasks.filter(t => t !== taskText);
          $(this).closest("tr").remove();
        });

        $("#taskTable tbody").append(row);
        row.fadeIn(400);
      });
    }

    $("#addBtn").click(function () {
      const taskText = $("#taskInput").val().trim();

      if (taskText === "") return;

      if (tasks.length >= 100) {
        alert("Maximum of 100 tasks allowed");
        return;
      }

      tasks.push(taskText);
      $("#taskInput").val("");
      renderTasks();
    });

    $("#clearBtn").click(function () {
      tasks = [];
      $("#taskTable tbody").empty();
    });