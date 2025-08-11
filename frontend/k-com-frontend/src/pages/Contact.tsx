import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'
import { Footer } from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)


    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // e.g. service_xxx
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // e.g. template_xxx
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // e.g. your public key
      )

      toast.success('Message sent! ✅')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
          <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows={5} />
          <Button type="submit" disabled={loading} className="flex items-center gap-2">
            {loading && (
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            )}
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4">Alternatively, reach us via our socials.</p>
        <Footer />
      </div >
    </>
  )
}
