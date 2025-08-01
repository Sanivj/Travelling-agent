"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { createTrip } from "@/lib/actions/create-trip"
import { cn } from "@/lib/utils"
import { useTransition } from "react"

export default function NewTrip(){
    const [isPending,startTansition]=useTransition()
    return(
    <div className="max-w-lg mx-auto mt-10">
        <Card>
        <CardHeader>New Trip</CardHeader>
        <CardContent>
            <form className="space-y-6" action={(formData:FormData)=>{
                startTansition(()=>{
                    createTrip(formData)
                })
            }}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Japan Trip..." 
                        className={cn(
                            "w-full border border-gray-300 px-3 py-2",
                            "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        )}
                        required
                        />   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        placeholder="Trip Description" 
                        className={cn(
                            "w-full border border-gray-300 px-3 py-2",
                            "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        )}
                        required
                        />   
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date</label>
                        <input 
                            type="date"
                            name="startDate"
                        
                            className={cn(
                                "w-full border border-gray-300 px-3 py-2",
                                "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            )}
                            required
                            />   
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                         
                            className={cn(
                                "w-full border border-gray-300 px-3 py-2",
                                "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            )}
                            required
                            />   
                    </div>
                </div>
                    <Button type="submit" disabled={isPending} className="w-full">
                    {isPending?"Creating...":"Create Trip"}
                    </Button>

            </form>
        </CardContent>
        </Card>
    </div>
    ) 
}