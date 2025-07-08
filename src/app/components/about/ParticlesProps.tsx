"use client"

import { useEffect, useRef } from "react"

interface ParticlesProps {
    particleColors?: string[]
    particleCount?: number
    particleSpread?: number
    speed?: number
    particleBaseSize?: number
    moveParticlesOnHover?: boolean
    alphaParticles?: boolean
    disableRotation?: boolean
}

export default function Particles({
    particleColors = ["#ffffff", "#ffffff"],
    particleCount = 200,
    particleSpread = 10,
    speed = 0.1,
    particleBaseSize = 100,
    moveParticlesOnHover = true,
    alphaParticles = false,
    disableRotation = false,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>(0)
    const particlesRef = useRef<any[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        const createParticles = () => {
            particlesRef.current = []
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    size: Math.random() * 3 + 1,
                    color: particleColors[Math.floor(Math.random() * particleColors.length)],
                    alpha: alphaParticles ? Math.random() * 0.5 + 0.5 : 1,
                    rotation: disableRotation ? 0 : Math.random() * Math.PI * 2,
                    rotationSpeed: disableRotation ? 0 : (Math.random() - 0.5) * 0.02,
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach((particle) => {
                // Move particles
                particle.x += particle.vx
                particle.y += particle.vy

                // Mouse interaction
                if (moveParticlesOnHover) {
                    const dx = mouseRef.current.x - particle.x
                    const dy = mouseRef.current.y - particle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        const force = (100 - distance) / 100
                        particle.vx += dx * force * 0.001
                        particle.vy += dy * force * 0.001
                    }
                }

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                // Keep particles in bounds
                particle.x = Math.max(0, Math.min(canvas.width, particle.x))
                particle.y = Math.max(0, Math.min(canvas.height, particle.y))

                // Update rotation
                if (!disableRotation) {
                    particle.rotation += particle.rotationSpeed
                }

                // Draw particle
                ctx.save()
                ctx.globalAlpha = particle.alpha
                ctx.fillStyle = particle.color
                ctx.translate(particle.x, particle.y)
                ctx.rotate(particle.rotation)
                ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
                ctx.restore()
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current.x = e.clientX - rect.left
            mouseRef.current.y = e.clientY - rect.top
        }

        const handleResize = () => {
            resizeCanvas()
            createParticles()
        }

        resizeCanvas()
        createParticles()
        animate()

        canvas.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("resize", handleResize)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            canvas.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", handleResize)
        }
    }, [
        particleColors,
        particleCount,
        particleSpread,
        speed,
        particleBaseSize,
        moveParticlesOnHover,
        alphaParticles,
        disableRotation,
    ])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: moveParticlesOnHover ? "auto" : "none" }}
        />
    )
}
