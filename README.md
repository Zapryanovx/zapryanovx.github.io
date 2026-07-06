# Портфолио сайт

Прост статичен сайт (HTML/CSS/JS, без build стъпки). Съдържанието на сайта е на английски.

## Структура

```
index.html            - начална страница: Hero, About, Skills, Projects, Contact + линк към сертификатите
certificates.html      - отделна страница: LeetCode статистика + сертификати (Programming / Business & Marketing)
css/style.css          - стиловете
js/script.js           - мобилно меню + година във футъра
assets/certificates/   - PDF файловете на сертификатите
```

## Какво да редактираш

1. **Лична информация** - в `index.html`:
   - `<title>` и `<h1>` в hero секцията - твоето име
   - `.role`, `.hero-desc`, секция "About Me" - описание за теб
   - Секция "Contact" - линкове към LinkedIn/GitHub

2. **Умения / Проекти** - секции `#skills` и `#projects` в `index.html`.

3. **Сертификати** - в `certificates.html`, секция `#programming-certificates`:
   - Копирай PDF файла в `assets/certificates/`
   - Добави `<a class="cert-card">` блок, най-нов най-отгоре:
   ```html
   <a class="cert-card" href="assets/certificates/my-file.pdf" target="_blank" rel="noopener">
     <div class="cert-info">
       <span class="cert-date">Month Year</span>
       <h3>Course Name</h3>
       <p class="cert-issuer">Issuer</p>
       <p class="cert-desc">One-sentence description of the course.</p>
     </div>
   </a>
   ```
   - За бизнес/маркетинг сертификати - секция `#business-certificates`, същия формат.

4. **LeetCode статистика** - секция `#leetcode` в `certificates.html` е ръчно въведена (LeetCode няма публично API за автоматично вграждане). Обнови числата ръчно при нужда, или замени с картинка от услуга като `leetcard.jacoblin.cool/<username>`.

## Локално стартиране

```
python -m http.server 5500
```

и отвори http://localhost:5500

## Публикуване (безплатно)

- **GitHub Pages**: качи папката в GitHub repo → Settings → Pages → избери branch
- **Netlify**: пусни https://app.netlify.com/drop и провлачи папката
