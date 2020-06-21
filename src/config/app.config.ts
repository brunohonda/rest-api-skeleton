import { resolve } from 'path';

import * as dotenv from 'dotenv';

const path = resolve(__dirname, '../../.env');

dotenv.config({ path });