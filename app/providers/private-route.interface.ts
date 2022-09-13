import { NextPage } from 'next';
import { RoleType } from '@/app/types/RoleType';

export type NextPageAuth<P = {}> = NextPage<P> & RoleType

export type TypeComponentAuthFields = { Component: RoleType }
