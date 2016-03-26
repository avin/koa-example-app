export default function*(next) {
    this.cookies.set('x-csrf-token', this.csrf);

    // ignore get, head, options
    if (this.method === 'GET'
        || this.method === 'HEAD'
        || this.method === 'OPTIONS') {
        return yield* next
    }

    // Search csrf token in cookies
    this.assertCSRF({_csrf: this.cookies.get('x-csrf-token')});

    yield* next
};