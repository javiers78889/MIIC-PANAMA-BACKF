import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutos
    max: 5, // máximo 5 peticiones por IP
    message: {
        error: 'Demasiadas solicitudes. Intenta nuevamente más tarde.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});


export const limiterQuery = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 3, // máximo 5 peticiones por IP
    message: {
        error: 'Ha superado su limite de tokens por día.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
