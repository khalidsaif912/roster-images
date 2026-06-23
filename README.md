# Hidden Objects Game

لعبة ويب عربية بسيطة مستوحاة من صورة "Find 12 Hidden Objects".

## التشغيل

افتح الملف التالي مباشرة في المتصفح:

```text
index.html
```

أو شغّل خادمًا محليًا بسيطًا:

```bash
python3 -m http.server 8000
```

ثم افتح:

```text
http://localhost:8000
```

## الملفات

- `index.html`: هيكل اللعبة وقائمة العناصر المطلوبة.
- `styles.css`: تصميم الواجهة وتجاوبها مع الجوال.
- `game.js`: منطق النقر، احتساب التقدم، وإعادة اللعب.
- `assets/hidden-objects-room.svg`: مشهد اللعبة المرسوم بصيغة SVG.

## النشر على GitHub Pages

من إعدادات المستودع في GitHub:

1. افتح Settings.
2. اختر Pages.
3. اختر النشر من branch الرئيسي.
4. اختر مجلد الجذر `/`.
