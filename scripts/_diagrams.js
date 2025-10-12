window.addEventListener("DOMContentLoaded", () => {
    const textColor = "#fff";
    const gridColor = "rgba(255,255,255,0.1)";

    const chartConfig = (labels, data, label) => ({
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label,
                data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(255,255,255,0.8)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
            y: { beginAtZero: true, ticks: { color: textColor }, grid: { color: gridColor } },
            x: { ticks: { color: textColor }, grid: { color: gridColor } }
            },
            plugins: { legend: { labels: { color: textColor } } }
        }
    });

    //! ===== 5 КЛАСС =====

    new Chart(chart5_1, chartConfig(['Иногда', 'Часто', 'Редко', 'Никогда'], [54, 19, 21, 6], '% учащихся'));
    new Chart(chart5_2, chartConfig(['Контрольные и тесты', 'Плохие оценки', 'Учитель злится', 'Отношения'], [29, 29, 21, 21], '% учащихся'));
    new Chart(chart5_3, chartConfig(['Сердцебиение', 'Страх', 'Злость', 'Плач', 'Боль', 'Ничего'], [30, 21, 8, 13, 9, 16], '% учащихся'));
    new Chart(chart5_4, chartConfig(['Ничего не делаю', 'Плачу', 'Иду к взрослым'], [79, 17, 4], '% учащихся'));
    new Chart(chart5_5, chartConfig(['Общение с близкими', 'Другое'], [55, 45], '% учащихся'));

    //! ===== 7 КЛАСС =====

    new Chart(chart7_1, chartConfig(['Часто', 'Иногда', 'Редко', 'Почти никогда'], [46, 18, 18, 19], '% учащихся'));
    new Chart(chart7_2, chartConfig(['Контрольные', 'Плохие оценки', 'Ответ у доски', 'Общение'], [35, 35, 23, 6], '% учащихся'));
    new Chart(chart7_3, chartConfig(['Сердцебиение', 'Грусть/замкнутость', 'Боль', 'Злость', 'Тяжело дышать', 'Ничего'], [28, 22, 12, 9, 8, 21], '% учащихся'));
    new Chart(chart7_4, chartConfig(['Справляюсь сам', 'Делясь со взрослыми', 'Плачу', 'Другое'], [43, 26, 18, 13], '% учащихся'));
    new Chart(chart7_5, chartConfig(['Коммуникация', 'Активный отдых', 'Онлайн-игры'], [23, 17, 17], '% учащихся'));

    //! ===== 10 КЛАСС =====

    new Chart(chart10_1, chartConfig(['Часто', 'Иногда', 'Редко', 'Никогда'], [31, 31, 21, 17], '% учащихся'));
    new Chart(chart10_2, chartConfig(['Контрольные', 'Ответы', 'Плохие оценки', 'Общение'], [51, 21, 15, 13], '% учащихся'));
    new Chart(chart10_3, chartConfig(['Сердцебиение', 'Грусть', 'Агрессия', 'Тяжело дышать', 'Ничего'], [27, 20, 18, 17, 18], '% учащихся'));
    new Chart(chart10_4, chartConfig(['Отстраняюсь', 'Делясь с друзьями', 'С взрослыми', 'Грусть'], [38, 28, 6, 28], '% учащихся'));
    new Chart(chart10_5, chartConfig(['Общение', 'Музыка', 'Игры', 'Еда/спорт', 'Психолог', 'Дыхание'], [25, 14, 14, 12, 2, 7], '% учащихся'));
});