module.exports = {
    apps: [
        {
            name: '1907.taxi :3000', // Имя приложения
            port: '3000',
            script: '.output/server/index.mjs', // Путь к вашему собранному приложению
            instances: '1', // Автоматическое определение количества инстансов
            exec_mode: 'cluster', // Режим запуска в кластере
            watch: false, // Отключить слежение за изменениями в файлах (обычно не нужно на продакшене)
            log_file: './logs/combined.log', // Файл для общего логирования
            out_file: './logs/out.log', // Файл для логирования стандартного вывода
            error_file: './logs/error.log', // Файл для логирования ошибок
            env: {
                NODE_ENV: 'production', // Переменная окружения для продакшена
            },
            env_development: {
                NODE_ENV: 'development', // Переменная для разработки
            },
        },
    ]
}
