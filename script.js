function delayLink(event) {
  event.preventDefault(); 
  const link = event.currentTarget.getAttribute('href');

  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = link;
  }, 500);
}

const teamMembers = [
    {
      src: "images/nopal.png",
      text: "Memasarkan layanan pengembangan web melalui strategi digital seperti media sosial, SEO, dan iklan online. Bertujuan menarik klien, meningkatkan visibilitas brand, dan mendukung pertumbuhan bisnis. Berkolaborasi dengan tim untuk memastikan pesan promosi selaras dengan produk",
      name: "Noval Wijaya",
      title: "Marketing | 18 tahun",
    },
    {
      src: "images/efan.png",
      text: "Bertanggung jawab mengatur jalannya proyek pengembangan web dari awal hingga selesai. Memimpin tim, mengelola waktu dan anggaran, serta menjadi penghubung antara klien dan tim internal. Fokus utama adalah memastikan hasil proyek tepat waktu, sesuai kebutuhan, dan berkualitas",
      name: "Efan Fadian",
      title: "Manager | 17 tahun",
    },
     {
      src: "images/ikhlas.png",
      text: "Bertugas membuat tampilan dan pengalaman pengguna website yang menarik dan fungsional. Mendesain wireframe, prototipe, dan visual antarmuka yang responsif. Bekerja sama dengan tim developer untuk mewujudkan desain yang sesuai brand dan mudah digunakan",
      name: "Ikhlas Sujiwo",
      title: "Desainer | 17 tahun",
    },
    {
      src: "images/dikki.png",
      text: "Optimization Specialist bertanggung jawab meningkatkan performa, efisiensi, dan efektivitas website agar memberikan pengalaman pengguna yang optimal dan hasil bisnis yang maksimal",
      name: "Diky Estrada",
      title: "Optimization Specialist | 17 tahun",
    },
    {
      src: "images/anggi.png",
      text: "Memasarkan layanan pengembangan web melalui strategi digital seperti media sosial, SEO, dan iklan online. Bertujuan menarik klien, meningkatkan visibilitas brand, dan mendukung pertumbuhan bisnis. Berkolaborasi dengan tim untuk memastikan pesan promosi selaras dengan produk",
      name: "Anggi Sukmayani",
      title: "Marketing | 17 tahun",
    },
    {
      src: "images/tantoo.png",
      text: "Memasarkan layanan pengembangan web melalui strategi digital seperti media sosial, SEO, dan iklan online. Bertujuan menarik klien, meningkatkan visibilitas brand, dan mendukung pertumbuhan bisnis. Berkolaborasi dengan tim untuk memastikan pesan promosi selaras dengan produk",
      name: "Tanto Ahdi Wibowo",
      title: "Marketing | 17 tahun",
    }
  ];

  let currentTeamIndex = 0;

  function changeImage(direction) {
    const wrapper = document.querySelector(".image-wrapper");
    const oldImg = document.getElementById("team-image");
    const newImg = document.createElement("img");

    const newIndex = (currentTeamIndex + direction + teamMembers.length) % teamMembers.length;
    const member = teamMembers[newIndex];

    newImg.src = member.src;
    newImg.alt = member.name;
    newImg.id = "team-image";
    newImg.classList.add("active");
    newImg.style.transform = `translateX(${direction > 0 ? "100%" : "-100%"})`;

    wrapper.appendChild(newImg);

    setTimeout(() => {
      newImg.style.transform = "translateX(0)";
      oldImg.style.transform = `translateX(${direction > 0 ? "-100%" : "100%"})`;
      oldImg.style.opacity = "0";
    }, 10);

    setTimeout(() => {
      wrapper.removeChild(oldImg);
    }, 500);

    const text = document.getElementById("team-text");
    text.innerHTML = `
      <blockquote>
        <p>"${member.text}"</p>
        <strong>${member.name}</strong>
        <small>${member.title}</small>
        <div class="button-wrapper">
          <button class="arrow-btn" onclick="changeImage(-1)">&#8592;</button>
          <button class="arrow-btn" onclick="changeImage(1)">&#8594;</button>
        </div>
      </blockquote>
    `;

    currentTeamIndex = newIndex;
  }

  const text = "Selamat Datang di SigMasDev";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;
