function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi sistem yazılımları kapsamında değerlendirilir?", { a: "Google Chrome", b: "Paint", c: "Avira Antivirüs", d: "Windows 10" }, "d"),
    new Soru("5-Hangisi işlemcinin komut kümesinden yazılmış en alt seviyede bulunan dil olarak değerlendirilir?", { a: "Assembly", b: "Makine Kodu", c: "Assembler", d: "C++" }, "b"),
    new Soru("6-İnsan diline yakın olan programlama dillerine ne denir?", { a: "Alçak Seviyeli", b: "Normal Seviyeli", c: "Son Seviyeli", d: "Yüksek Seviyeli" }, "d"),
    new Soru("7-CSS'in açılımı nedir?", { a: "Custom Style Sheet", b: "Computer Style Sheets", c: "Cascading Style Sheet", d: "Colorful Style Sheets" }, "c"),
    new Soru("8-Hangisi arkaplan rengini değiştiren etikettir?", { a: "background-color", b: "bg-color", c: "b-color", d: "bground" }, "a"),
    new Soru("9-Hangisi yazının belirli bir bölümünü biçimlendirmek için kullanılan etikettir?", { a: "span", b: "div", c: "p", d: "display" }, "a"),
    new Soru("10-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];