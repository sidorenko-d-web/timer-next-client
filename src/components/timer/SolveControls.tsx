'use client'
import { useSessionStore } from "@/hooks/storages";
import { solveService } from "@/services/solves.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

export const SolveControls = () => {

  const { lastSolve } = useSessionStore()

  const queryClient = useQueryClient()

  const { mutate: updateSolve } = useMutation({
    mutationKey: ['update-solve'],
    mutationFn: ({ penalty, id }: { penalty: string | null, id: string }) =>
      solveService.update(id, { penalty }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['session'] })
    },
    onError(e) {
      console.log(e)
    }
  })

  const { mutate: deleteSolve } = useMutation({
    mutationKey: ['delete-solve'],
    mutationFn: ({ id }: { id: string }) =>
      solveService.delete(id),
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ['session']})
    },
    onError(e){
      console.log(e)
    }
    })


  const penalty = (penalty: string, e: any) => {
    e.target.blur()
    const penaltyReq = lastSolve.penalty === null ? penalty : null
    updateSolve({ penalty: penaltyReq, id: lastSolve.id })
  }

  const deleteButton = (e: any) => {
    e.target.blur()
    deleteSolve({id: lastSolve.id})
  }

  return (
    <div className="xl:text-xl">
      <button onClick={(e) => penalty('plus2', e)} className=" w-24 2xl:w-32 py-3 2xl:py-4 bg-dark-gray-bg rounded-l-full text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all">
        +2
      </button>

      <button onClick={(e) => penalty('dnf', e)} className=" py-3 2xl:py-4 bg-dark-gray-bg text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all inline-block w-24  2xl:w-32  border-r border-l">
          DNF
      </button>
      <button onClick={deleteButton}  className="w-24 2xl:py-4 2xl:w-32 py-3 bg-dark-gray-bg rounded-r-full text-center  active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all">
        Delete
      </button>
    </div>
  );
};
