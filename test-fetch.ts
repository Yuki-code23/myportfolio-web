import { createClient } from 'microcms-js-sdk'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
})

async function test() {
  console.log('Domain:', process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN)
  try {
    const data = await client.get({
      endpoint: 'projects',
    })
    console.log('Success! Count:', data.totalCount)
    console.log('Contents:', JSON.stringify(data.contents, null, 2))
  } catch (e) {
    console.error('Error:', e)
  }
}

test()
